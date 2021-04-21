const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  patient: {
    name: String,
    document: String
  },
  implants:[{
    implant: {
        type: String,
        ref: "Inventory",
        alias: "implants.implant",
        //field: "referencia"
    },
    referencia: String,
    qty: Number,
    isReplacement: {
      type: Boolean,
      default: false
    },
    Descripcion: String
  }],
  rejectedImplants: [{
    implant: {
        type: Schema.Types.ObjectId,
        ref: "Inventory",
        alias: "rejectedImplants.implant"
    }
  }],
  comment: {
    pickupDate: {type: Date, default: new Date()},
    paymentDate: {type: Date, default: new Date()},
    deliveryDate: {type: Date, default: new Date()},
    motor: {type: Boolean, default: false},
    kos: {type: Boolean, default: false},
    bcs: {type: Boolean, default: false},
    hexa: {type: Boolean, default: false},
    mangos: {type: Boolean, default: false},
    comment: {type: String, default: ''}
  },
  isDraft: {type: Boolean, default: false},
  status: {type: Number, default: 0} //0: ordered, 1: sent, 2: cancelled
},
{ timestamps: { createdAt: true } });

orderSchema.index({createdAt: 1},{expireAfterSeconds: 10800, partialFilterExpression : {isDraft: true}});

orderSchema.virtual('manager', {
  ref: 'User', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'client', // is equal to `foreignField`
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
