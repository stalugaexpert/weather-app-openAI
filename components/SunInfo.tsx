import { SunIcon, MoonIcon } from '@heroicons/react/solid'

type Props = {
  dayTime: 'sunrise' | 'sunset'
  infoTime: string
}

function SunInfo({ dayTime, infoTime }: Props) {
  return (
    <div className="flex items-center space-x-2 px-4 py-3 border border-[#4F90CD] rounded-md bg-[#405885]">
      {dayTime === 'sunrise' ? (
        <SunIcon className="h-10 w-10 text-gray-400" />
      ) : (
        <MoonIcon className="h-10 w-10 text-gray-400" />
      )}
      <div className="flex-1 flex justify-between items-center">
        <p className="font-extralight">
          {dayTime === 'sunrise' ? 'Sunrise' : 'Sunset'}
        </p>
        <p className="uppercase text-2xl">
          {new Date(infoTime).toLocaleTimeString('en-gb', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
      </div>
    </div>
  )
}

export default SunInfo
