import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CityPicker from './CityPicker'
import { loadingMessageCSS } from 'react-select/dist/declarations/src/components/Menu'
import weatherCodeToString from '@/lib/weatherCodeToString'
import SunInfo from './SunInfo'

type Props = {
  city: string
  results: Root
  lat: string
  long: string
}

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="text-white p-10 bg-gradient-to-br from-[#394F68] to-[#183B7E]">
      <div className="pb-5">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400">
          Long / Lat: {long}, {lat}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            alt={weatherCodeToString[results.current_weather.weathercode].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className="text-right font-extralight text-lg">
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-5">
        <SunInfo
          dayTime="sunrise"
          infoTime={results.daily.sunrise[0]}
        />
        <SunInfo
          dayTime="sunset"
          infoTime={results.daily.sunset[0]}
        />
      </div>
    </div>
  )
}

export default InformationPanel
