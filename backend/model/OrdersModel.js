import { model } from 'mongoose';
import { OrdersSchema } from '../schemas/OrdersSchema.js';

const OrdersModel = model('Order', OrdersSchema, 'orders');

export default OrdersModel;