export interface IUsers {
  count: number
  items: [
    {
      email: string
      password: string
      name: string
      surname: string
      id: string
    }
  ]
}
