export interface OrgProps {
  id: string
  street: string
  whatsapp: string,
}

export class Org {
  private props

  constructor(props: OrgProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get street() {
    return this.props.street
  }

  get whatsapp() {
    return this.props.whatsapp
  }
}