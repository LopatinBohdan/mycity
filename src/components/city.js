import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useParams, Link } from "react-router-dom";
// import ".style.css";

const places=[
    {id:1, place:"place1"},
    {id:2, place:"place2"},
    {id:3, place:"place3"},
    {id:4, place:"place4"}
]
const photos=[
    {id:1, photo:"../img/img1.jpg"},
    {id:2, photo:"../img/img2.jpg"},
    {id:3, photo:"../img/img3.jpg"},
    {id:4, photo:"../img/img4.jpg"}
]

function Main(){
    return <h1>Welcome to my City</h1>
}

function NotFound(){
    return <h2>Not found</h2>
}

function Place(){
    const params=useParams();
    const pId=params.id;
    return <div>
        <h2>{places.find(p=>p.id==pId).place}</h2>
        <img src={photos.find(q=>q.id==pId).photo} width="50%"></img>
    </div>
}

function CityInfo(){
    return(
        <>
            <h2>Some info about my City</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum tortor varius urna auctor bibendum. Cras bibendum felis leo, eget posuere ex rhoncus vel. Mauris egestas felis arcu, a mattis felis dignissim at. Integer sagittis tortor a nisi mattis, eu congue turpis sollicitudin. Curabitur libero odio, fringilla sit amet pellentesque eget, rhoncus ut mi. Donec a dui varius magna consectetur ullamcorper scelerisque quis nibh. Nam vel volutpat velit. Vivamus rhoncus convallis tincidunt. Mauris malesuada quam malesuada, sodales mi non, convallis odio. Nunc quis ligula egestas turpis venenatis sollicitudin non eu leo. Morbi sed nunc convallis orci lobortis luctus. Mauris tempus quam vitae libero congue, vitae hendrerit nisi auctor. In id feugiat est, lobortis scelerisque felis. Phasellus metus ipsum, blandit convallis arcu vel, varius convallis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dictum finibus diam, sit amet mattis felis volutpat et.</p>
        </>
    )
}

function FamousPlace(){
    return(
        <>
            <h2>Most famous place in my City</h2>
            <p>{places[0].place}</p>
            <img src={photos[0].photo} width="50%"></img>
        </>
    )
}

function Places(){
    return(
        <>
            <h2>Interesting places of my City</h2>
            <ul>
                {
                    places.map(function(item){
                        return <li key={item.id}>
                            <NavLink to={`/places/${item.id}`}>{item.place}</NavLink>
                        </li>
                    })
                }
            </ul>
            <Outlet></Outlet>
        </>
    )
}

function Photos(){
    return(
        <>
            <h2>Interesting places of my City</h2>
            <ul>
                {
                    photos.map(function(item){
                        return <li key={item.id}>
                            <img src={item.photo} width="50%"></img>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

function Nav(){
    return <nav>
        <Link className="links" to="/">Main</Link>
        <Link className="links" to="/info">Info</Link>
        <Link className="links" to="/famous">Most famous place</Link>
        <Link className="links" to="/places">Interesting places</Link>
        <Link className="links" to="/photos">Photo</Link>
    </nav>
}

function City(){
    return(
        <>
            <Router>
                <div>
                    <Nav></Nav>
                    <Routes>
                        <Route path="/" element={<Main></Main>}></Route>
                        <Route path="/info" element={<CityInfo></CityInfo>}></Route>
                        <Route path="/famous" element={<FamousPlace></FamousPlace>}></Route>
                        <Route path="/photos" element={<Photos></Photos>}></Route>
                        <Route path="/places" element={<Places></Places>}>
                            <Route path=":id" element={<Place></Place>}></Route>
                        </Route>
                        <Route path="*" element={<NotFound></NotFound>}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default City;


