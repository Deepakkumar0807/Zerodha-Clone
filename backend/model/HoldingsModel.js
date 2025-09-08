import { model } from 'mongoose';
import { HoldingSchema } from '../schemas/HoldingSchema.js';

const HoldingsModel = model('Holding', HoldingSchema, 'holdings');

export default HoldingsModel;