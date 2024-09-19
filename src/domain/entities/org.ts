export interface OrgProps {
  id: string,
  user: string,
  pass: string,
  street: string
  whatsapp: string,
  city: string
}

export class Org {
  private props

  constructor(props: OrgProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  get user() {
    return this.props.user
  }

  get pass() {
    return this.props.pass
  }

  get street() {
    return this.props.street
  }

  get whatsapp() {
    return this.props.whatsapp
  }

  get city() {
    return this.props.city
  }
}