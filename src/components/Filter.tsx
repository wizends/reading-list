import { useState } from 'react'
import { useLibraryStore } from '../stores/libraryStore'
import { GenreType } from '../types.d'

export const Filter = ({min, max} : {min: number, max: number}) => {
    const [filter, setFilter] = useState(max)
    const { filterByPages, filterByGenre, genres } = useLibraryStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(Number(e.target.value))
        filterByPages(Number(e.target.value))
    }
    const handleChangeFilter = (e : React.ChangeEvent<HTMLSelectElement>) => {
        filterByGenre(e.target.value as GenreType)
    }
    return(
        <section className=''>
            <div className='flex gap-3'>
                <input type="range" onChange={handleChange} min={min} max={max} value={filter} step={1} />
                <input type='text' value={filter} onChange={handleChange} />
                <select onChange={handleChangeFilter}>
                    <option value={GenreType.Todas}>todas</option>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}