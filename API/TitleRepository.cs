namespace API
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using API.Model;

    using Microsoft.Extensions.Options;
    using MongoDB.Bson;
    using MongoDB.Driver;

    public class TitleRepository : ITitleRepository
    {
        private readonly TitleContext context;

        public TitleRepository(IOptions<Settings> settings)
        {
            context = new TitleContext(settings);
        }

        public async Task<Title> Get(string id)
        {
            var query = Builders<Title>.Filter.Eq("Id", id);

            try
            {                
                return await context.Titles.Find(query).FirstOrDefaultAsync();
            }
            catch (Exception e)
            {
                // TODO: Handle Exceptions
                throw e;
            }
        }

        public async Task<IEnumerable<Title>> GetAllTitles()
        {
            try
            {
                var result = await context.Titles.Find(x => true).ToListAsync();
                return result;
            }
            catch (Exception e)
            {
                // TODO: Handle Exceptions
                throw e;
            }
        }

        public async Task<IEnumerable<Title>> GetTitles(int pageSize, int pageNumber)
        {
            try
            {
                return await context.Titles.Find(x => true)
                    .Skip(pageNumber)
                    .Limit(pageSize)
                    .ToListAsync();
            }
            catch (Exception e)
            {
                // TODO: Handle Exceptions
                throw e;
            }
        }
    }
}
