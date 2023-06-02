import {Arg, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {CreateAppointmentInput} from "../DTOs/inputs/createAppointmentInput";
import {Appointment} from "../DTOs/models/appointment-model";
import {Customer} from "../DTOs/models/customer";

@Resolver(() => Appointment)
export class AppointmentResolver {

    @Query(() => [Appointment])
    async appointments() {
        return [{
            startAt: new Date(),
            endsAt: new Date()
        }];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {

        return {
            startAt: data.startAt,
            endsAt: data.endsAt
        };
    }

    @FieldResolver(() => Customer)
    async customer(@Root() appointment: Appointment) {
        return {
            name: "Daniel Klotz"
        };

    }
}