namespace API.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using API.Model;
    using Microsoft.AspNetCore.Mvc;

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class TitlesController : Controller
    {
        private readonly ITitleRepository titleRepository;

        public TitlesController(ITitleRepository titleRepository)
        {
            this.titleRepository = titleRepository;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Title>> Get()
        {
            return await titleRepository.GetAllTitles();
        }
        
        [HttpGet("{id}", Name = "Get")]
        public async Task<Title> Get(string id)
        {
            return await titleRepository.Get(id);
        }
    }
}
