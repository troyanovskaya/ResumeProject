export interface Project{
  id?: string,
  title: string,
  subtitle: string,
  avatar: string,
  techologies: string[],
  description: string,
  new: string,
  links: {frontEnd: string, backEnd: string, gitF:string, gitB:string},
  picture: string,
  languages: string[]
}
