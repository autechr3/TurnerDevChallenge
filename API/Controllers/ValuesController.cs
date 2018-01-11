namespace API.Controllers
{
    using System.Collections.Generic;
    using API.Model;
    using Microsoft.AspNetCore.Mvc;
    using MongoDB.Bson;
    using MongoDB.Driver;

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public string Get()
        {
            var client = new MongoClient("mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge");
            var db = client.GetDatabase("dev-challenge");
            var collection = db.GetCollection<BsonDocument>("Titles");
            var a = collection.Find(new BsonDocument()).ToList();
            return a.ToJson();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
