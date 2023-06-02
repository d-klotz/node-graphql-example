import {Field, InputType} from "type-graphql";

@InputType()
export class CreateAppointmentInput {

    @Field()
    customerID: string;

    @Field()
    startAt: Date;

    @Field()
    endsAt: Date;
}