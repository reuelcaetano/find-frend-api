export interface PetProps {
  id: string
  orgId: string | null
  name: string
  age: number
  adoption: boolean
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

  get orgId() {
    return this.props.orgId
  }

  get name() {
    return this.props.name
  }

  get age() {
    return this.props.age
  }

  get adoption() {
    return this.props.adoption
  }

  get weightInGrams() {
    return this.props.weightInGrams
  }
}