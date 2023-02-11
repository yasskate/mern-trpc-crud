import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})

class Note {
  @prop({ type: String })
  title: string

  @prop({ type: String })
  decription: string

  @prop({ type: Boolean })
  done: boolean
}

export default getModelForClass(Note)

