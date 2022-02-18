import React , { useState, useEffect }from 'react';
import Profile1 from '../../img/Profile1.jpg';
import './search.css';
import { Container, Grow, Grid , Paper , TextField , AppBar ,Button , Chip} from '@material-ui/core';
// import ChipInput from 'material-ui-chip-input';
import { useLocation, useNavigate } from 'react-router-dom';
// import useStyles from './styles';
import { useDispatch } from 'react-redux';
// import { getPosts ,  getPostsBySearch } from '../../actions/posts';
// import Chip from '@mui/material/Chip';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import { Autocomplete } from '@material-ui/lab';

const Right = () => {

    // const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setcurrentId] = useState(0);
    // const query = useQuery();
    // const page = query.get('page') || 1;
    const history = useNavigate();
    // const searchQuery = query.get('searchQuery');

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);


    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
        //   searchPost();
        }
      };
    //   const searchPost = () => {
    //     if (search.trim() || tags) {
    //       dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
    //       history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    //     } else {
    //       history('/');
    //     }
    //   };

    //   const handleAddChip = (tag) => setTags([...tags, tag]);

    //   const handleDeleteChip = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
      const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);


    return (
        <div>
            <div className="right">
                       <div className="search1">
                                <div className="headings">
                                    <h4>search</h4><i className="uil uil-edit"></i>
                                </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div className="category">
                                    <h6 className="active" type="button">By Posts</h6>
                                    <h6 >By tags</h6>

                            </div>
                             {/* <TextField 
                            name="search" 
                            variant="outlined" 
                            label="Search Memories"
                            onKeyPress={'handleKeyPress'}
                            fullWidth 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)}
                            />  */}
                                {/* <!----------------SEARCH BAR-----------------> */}
                            <div className="search-bar">
                                    <i className="uil uil-search"></i>
                                    <input
                                    name="search" 
                                    onKeyPress={handleKeyPress}
                                    fullWidth 
                                    value={search} 
                                    onChange={(e) => setSearch(e.target.value)} 
                                    type="search" 
                                    placeholder="search posts/tags" 
                                    id="search1-search" />
                            </div>
                            <div className="search-bar">
                                    <i className="uil uil-search"></i>
                                    <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    options={top100Films.map((option) => option.title)}
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                      value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                      ))
                                    }
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        variant="filled"
                                        placeholder="Favorites"
                                      />
                                    )}
                                  />
                            </div>
                            
                        </div>

                                {/* <!----------------------------END OF MESSAGES---------------> */}
                                

                                {/* <!----------------------------FRIEND REQUESTS---------------> */}
                                <div className="friend-requests">
                                    <h4>Requests</h4>
                                    {/* <!--Request  1--> */}
                                    <div className="requests">
                                        <div className="info">
                                            <div className="profile-picture">
                                                <img src={Profile1} />
                                            </div>
                                            <div>
                                                <h5>Coming Soon</h5>
                                                <p className="text-muted">
                                                    8 mutual friends
                                                </p>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <button className="btn btn-primary">
                                                Accept
                                            </button>
                                            <button className="btn">
                                                Decline
                                            </button>
                                            </div>
                                    </div>
                                </div>
                                <div className="messages">
                                <div className="headings">
                                    <h4>Messages</h4><i className="uil uil-edit"></i>
                                </div>
                            
                                {/* <!----------------SEARCH BAR-----------------> */}
                            <div className="search-bar">
                                    <i className="uil uil-search"></i>
                                    <input type="search" placeholder="search messages" id="messages-search" />
                            </div>
                            
                                {/* <!--------------------MESSAGES CATEGORY-------- --> */}
                            <div className="category">
                                    <h6 className="active">Primary</h6>
                                    <h6 >General</h6>
                                    <h6 className="message-requests">Request(7)</h6>
                            </div>
                            
                                {/* <!-----------------------------------MESSAGE--------------> */}
                                <div className="message">
                                Coming Soon    
                                </div>
                        </div>
                        
                    </div> 
        </div>
    )
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
export default Right
