const mongoose=require('mongoose');
const {Schema}=mongoose;

const AnimeSchema= new Schema(
    {
        anime_id:{type:Number,unique:true},
        anime_name:{type: String,required:true},
        rating:{type: String,required:true},
        startdate:{type: String,required:true},
        Enddate:{type: String,required:true},
        original_status:{type: String,required:true},
        your_status:{type: String,required:true}

    }
)

AnimeSchema.pre('save', async function (next) {
    if (!this.anime_id) {
      const lastAnime = await this.constructor.findOne({}, {}, { sort: {anime_id: -1 } });
      if (lastAnime) {
        const lastAnimeId = lastAnime.anime_id;
        const sequenceNumber = parseInt(lastAnimeId) + 1;
        this.anime_id = sequenceNumber;
      } else {
        this.anime_id = '1';
      }
    }
    
    next();
  });

const AnimeModel=mongoose.model("Anime",AnimeSchema);

module.exports=AnimeModel;