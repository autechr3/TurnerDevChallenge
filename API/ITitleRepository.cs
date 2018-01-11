namespace API
{
    using API.Model;

    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ITitleRepository
    {
        Task<IEnumerable<Title>> GetAllTitles();

        Task<IEnumerable<Title>> GetTitles(int pageSize, int pageNumber);

        Task<Title> Get(string id);
    }
}
