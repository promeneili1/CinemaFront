import { MovieScreening } from "./MovieScreening";
import { Seat } from "./Seat";
import { User } from "./User";

export interface Reservation {
    id: number;
    user: User;
    movieScreening: MovieScreening;
    reservedSeats: Seat;
    totalPrice: DoubleRange;
    reservationCode: string;
}