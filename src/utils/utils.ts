import { startCase } from 'lodash'
import { GetCharacterDetailsQuery, GetFilmDetailsQuery, GetPlanetDetailsQuery, GetSpeciesDetailsQuery, GetStarshipDetailsQuery, GetVehicleDetailsQuery } from '../generated/graphql'

const getCharacterPanelAContent = (characterDetailsData: GetCharacterDetailsQuery['person']) => {
  const panelAContent = [
    {
      heading: 'Species',
      content: startCase(characterDetailsData?.species?.name ?? ''),
      href: `/species/${getNameForUrl(characterDetailsData?.species?.name ?? '')}?id=${getFormattedId(characterDetailsData?.species?.id ?? '')}`,
    },
    {
      heading: 'Homeworld',
      content: startCase(characterDetailsData?.homeworld?.name ?? ''),
      href: `/planets/${getNameForUrl(characterDetailsData?.homeworld?.name ?? '')}?id=${getFormattedId(characterDetailsData?.homeworld?.id ?? '')}`,
    },
    {
      heading: 'Birth Year',
      content: startCase(characterDetailsData?.birthYear?.toString() ?? ''),
    },
    {
      heading: 'Gender',
      content: startCase(characterDetailsData?.gender ?? ''),
    },
  ]

  return panelAContent
}

const getCharacterPanelBContent = (characterDetailsData: GetCharacterDetailsQuery['person']) => {
  const panelBContent = [
    {
      heading: 'Height',
      content: characterDetailsData?.height?.toString() ?? '',
    },
    {
      heading: 'Mass',
      content: characterDetailsData?.mass?.toString() ?? '',
    },
    {
      heading: 'Hair Color',
      content: startCase(characterDetailsData?.hairColor ?? ''),
    },
    {
      heading: 'Eye Color',
      content: startCase(characterDetailsData?.eyeColor ?? ''),
    },
  ]

  return panelBContent
}

const getFilmPanelAContent = (data: GetFilmDetailsQuery['film']) => {
  return [
    {
      heading: 'Director',
      content: startCase(data?.director ?? ''),
    },
    {
      heading: 'Producers',
      content:
        data?.producers
          ?.filter((producer: string | null) => producer !== null)
          .map((producer: string | null) => producer && startCase(producer))
          .join(', ') ?? '',
    },
    {
      heading: 'Release Date',
      content: startCase(data?.releaseDate ?? ''),
    },
  ]
}

const getFormattedId = (id: string) => atob(id).split(':')[1]

const getNameForUrl = (name: string) =>
  name.replace(/ /g, '-').replace(/\//g, '-').toLowerCase()

const getPlanetPanelAContent = (planetDetailsData: GetPlanetDetailsQuery['planet']) => {
  const panelAContent = [
    {
      heading: 'Terrain',
      content:
        planetDetailsData?.terrains
          ?.map((terrain: string | null) => startCase(terrain ?? ''))
          .join(', ') ?? '',
    },
    {
      heading: 'Climate',
      content:
        planetDetailsData?.climates
          ?.map((climate: string | null) => startCase(climate ?? ''))
          .join(', ') ?? '',
    },
    {
      heading: 'Surface Water',
      content: planetDetailsData?.surfaceWater?.toString() ?? '',
    },
  ]

  return panelAContent
}

const getPlanetPanelBContent = (planetDetailsData: GetPlanetDetailsQuery['planet']) => {
  const panelBContent = [
    {
      heading: 'Population',
      content: planetDetailsData?.population?.toString() ?? '',
    },
    {
      heading: 'Gravity',
      content: startCase(planetDetailsData?.gravity ?? ''),
    },
    {
      heading: 'Diameter',
      content: planetDetailsData?.diameter?.toString() ?? '',
    },
    {
      heading: 'Rotation',
      content: planetDetailsData?.rotationPeriod?.toString() ?? '',
    },
  ]

  return panelBContent
}

const getSpeciesPanelAContent = (speciesDetailsData: GetSpeciesDetailsQuery['species']) => {
  const panelAContent = [
    {
      heading: 'Homeworld',
      content: startCase(speciesDetailsData?.homeworld?.name ?? ''),
      href: `/planets/${getNameForUrl(speciesDetailsData?.homeworld?.name ?? '')}?id=${getFormattedId(speciesDetailsData?.homeworld?.id ?? '')}`,
    },
    {
      heading: 'Language',
      content: startCase(speciesDetailsData?.language ?? ''),
    },
    {
      heading: 'Designation',
      content: startCase(speciesDetailsData?.designation ?? ''),
    },
  ]

  return panelAContent
}

const getSpeciesPanelBContent = (speciesDetailsData: GetSpeciesDetailsQuery['species']) => {
  const panelBContent = [
    {
      heading: 'Avg Height',
      content: speciesDetailsData?.averageHeight?.toString() ?? '',
    },
    {
      heading: 'Avg Lifespan',
      content: speciesDetailsData?.averageLifespan?.toString() ?? '',
    },
    {
      heading: 'Skin Colors',
      content:
        speciesDetailsData?.skinColors
          ?.map((skinColor: string | null) => startCase(skinColor ?? ''))
          .join(', ') ?? '',
    },
    {
      heading: 'Eye Colors',
      content:
        speciesDetailsData?.eyeColors
          ?.map((eyeColor: string | null) => startCase(eyeColor ?? ''))
          .join(', ') ?? '',
    },
  ]
  return panelBContent
}

const getStarshipPanelAContent = (starshipDetailsData: GetStarshipDetailsQuery['starship']) => {
  const panelAContent = [
    {
      heading: 'Manufacturer',
      content:
          starshipDetailsData?.manufacturers
            ?.map((manufacturer: string | null) => manufacturer)
            .join(', ') ?? '',
    },
    {
      heading: 'Model',
      content: startCase(starshipDetailsData?.model ?? ''),
    },
    {
      heading: 'Class',
      content: startCase(starshipDetailsData?.starshipClass ?? ''),
    },
    {
      heading: 'Cost',
      content: starshipDetailsData?.costInCredits?.toString() ?? '',
    },
  ]
  return panelAContent
}

const getStarshipPanelBContent = (starshipDetailsData: GetStarshipDetailsQuery['starship']) => {
  const panelBContent = [
    {
      heading: 'Crew',
      content: starshipDetailsData?.crew?.toString() ?? '',
    },
    {
      heading: 'Passengers',
      content: starshipDetailsData?.passengers?.toString() ?? '',
    },
    {
      heading: 'Speed',
      content: starshipDetailsData?.maxAtmospheringSpeed?.toString() ?? '',
    },
    {
      heading: 'Length',
      content: starshipDetailsData?.length?.toString() ?? '',
    },
    {
      heading: 'Cargo Capacity',
      content: starshipDetailsData?.cargoCapacity?.toString() ?? '',
    },
    {
      heading: 'Hyperdrive',
      content: starshipDetailsData?.hyperdriveRating?.toString() ?? '',
    },
  ]
  return panelBContent
}

const getVehiclePanelAContent = (vehicleDetailsData: GetVehicleDetailsQuery['vehicle']) => {
  const panelAContent = [
    {
      heading: 'Manufacturer',
      content:
        vehicleDetailsData?.manufacturers
          ?.map((manufacturer: string | null) => manufacturer)
          .join(', ') ?? '',
    },
    {
      heading: 'Model',
      content: startCase(vehicleDetailsData?.model ?? ''),
    },
    {
      heading: 'Class',
      content: startCase(vehicleDetailsData?.vehicleClass ?? ''),
    },
    {
      heading: 'Cost',
      content: vehicleDetailsData?.costInCredits?.toString() ?? '',
    },
  ]
  return panelAContent
}

const getVehiclePanelBContent = (vehicleDetailsData: GetVehicleDetailsQuery['vehicle']) => {
  const panelBContent = [
    {
      heading: 'Crew',
      content: vehicleDetailsData?.crew?.toString() ?? '',
    },
    {
      heading: 'Passengers',
      content: vehicleDetailsData?.passengers?.toString() ?? '',
    },
    {
      heading: 'Speed',
      content: vehicleDetailsData?.maxAtmospheringSpeed?.toString() ?? '',
    },
    {
      heading: 'Length',
      content: vehicleDetailsData?.length?.toString() ?? '',
    },
    {
      heading: 'Cargo Capacity',
      content: vehicleDetailsData?.cargoCapacity?.toString() ?? '',
    },
    {
      heading: 'Consumables',
      content: startCase(vehicleDetailsData?.consumables ?? ''),
    },
  ]
  return panelBContent
}


export {
  getCharacterPanelAContent,
  getCharacterPanelBContent,
  getFilmPanelAContent,
  getFormattedId,
  getNameForUrl,
  getPlanetPanelAContent,
  getPlanetPanelBContent,
  getSpeciesPanelAContent,
  getSpeciesPanelBContent,
  getStarshipPanelAContent,
  getStarshipPanelBContent,
  getVehiclePanelAContent,
  getVehiclePanelBContent,
}