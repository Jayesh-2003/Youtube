import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema=new Schema({
    videoFile:{
        type: String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:User,

    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        
    },
    views:{
        type:Number,
        default:0,
        
    },
    isPublished:{
        type:Boolean,
        default:true
    }
},
{timestamps})

videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model(Video,"videoSchema")