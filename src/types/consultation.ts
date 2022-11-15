import { Doctor } from "./doctor"
import { Patient } from "./patient"

export type Consultation = {
    name: Patient[],
    doctor: Doctor[],
    date: string
}