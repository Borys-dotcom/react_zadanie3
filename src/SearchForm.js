import './SearchForm.css'

const SearchForm = (props) => {

    return (
        <div className='searchBox' key={props.key}>
            <div className='searchContainer'>
                <label for='searchInput'>Szukaj: </label>
                <input type='text' id='searchInput' name='searchInput' placeholder='szukaj' onChange={props.searchFunction}/>
            </div>
        </div >
    );
}

export default SearchForm