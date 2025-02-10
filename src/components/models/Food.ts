class Food {
  title: string
  infos: string[]
  description: string
  image: string
  reviews?: string
  card: 'cardDefault' | 'cardProfile'
  id: number

  constructor(
    title: string,
    infos: string[],
    description: string,
    image: string,
    reviews: string,
    card: 'cardDefault' | 'cardProfile',
    id: number
  ) {
    this.title = title
    this.infos = infos
    this.description = description
    this.image = image
    this.reviews = reviews
    this.card = card
    this.id = id
  }
}

export default Food
