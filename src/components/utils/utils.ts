const getFormattedId = (id: string) => atob(id).split(':')[1]

const getNameForUrl = (name: string) =>
  name.replace(/ /g, '-').replace(/\//g, '-').toLowerCase()

export { getFormattedId, getNameForUrl }
