class Food {
  title: string
  infos: string[]
  description: string
  image: string
  reviews: string
  id: number

  constructor(
    title: string,
    infos: string[],
    description: string,
    image: string,
    reviews: string,
    id: number
  ) {
    this.title = title
    this.infos = infos
    this.description = description
    this.image = image
    this.reviews = reviews
    this.id = id
  }
}

export default Food
