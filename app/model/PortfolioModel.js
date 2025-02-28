import mongoose from "mongoose";


const PortfolioSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    codelink: String,
    livelink: String,
    userId: mongoose.Schema.Types.ObjectId
  });
  const PortfolioModel = mongoose.model('Portfolio', PortfolioSchema);

export default PortfolioModel