export interface PetProps {
  id: string
  name: string
  adoption: boolean,
  city: string,
  weightInGrams: number
}

export class Pet {
  private props

  constructor(props: PetProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get name() {
    return this.props.name
  }

  get adoption() {
    return this.props.adoption
  }

  get city() {
    return this.props.city
  }

  get weight() {
    return this.props.weight
  }
}