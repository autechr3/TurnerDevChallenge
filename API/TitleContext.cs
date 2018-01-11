namespace API
{
    using API.Model;
    using Microsoft.Extensions.Options;

    using MongoDB.Driver;

    public class TitleContext
    {
        private readonly IMongoDatabase database;

        public TitleContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<Title> Titles
        {
            get
            {
                return database.GetCollection<Title>("Titles");
            }
        }
    }
}
