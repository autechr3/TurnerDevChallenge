namespace API.Model
{
    using System.Collections.Generic;

    using MongoDB.Bson.Serialization.Attributes;

    public class Award
    {
        public bool AwardWon { get; set; }

        public int AwardYear { get; set; }

        public IEnumerable<string> Participants { get; set; }

        [BsonElement("Award")]
        public string AwardName { get; set; }

        public string AwardCompany { get; set; }
    }
}
