namespace API.Model
{
    using MongoDB.Bson.Serialization.Attributes;

    using System.Collections.Generic;

    public class Title
    {
        [BsonId]
        [BsonElement("_id")]
        public string Id { get; set; }

        public IEnumerable<Award> Awards { get; set; }

        public IEnumerable<string> Genres { get; set; }

        public IEnumerable<string> KeyGenres { get; set; }

        public IEnumerable<string> Keywords { get; set; }

        public IEnumerable<OtherName> OtherNames { get; set; }

        public IEnumerable<Participant> Participants { get; set; }

        public int ReleaseYear { get; set; }

        public IEnumerable<Storyline> Storylines { get; set; }

        public int TitleId { get; set; }

        public string TitleName { get; set; }

        public string TitleNameSortable { get; set; }
    }
}
