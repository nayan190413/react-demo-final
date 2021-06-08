import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import '../Css/list.css';
import DetailPage from './DetailPage';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const List = () => {

    const [data, setData] = useState([]);
    const getData=async()=> {
        try {
            const response = await axios.get("https://dev.perfectprof.com/api/search");
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    return (
    <>
        <div style={{ width: "100%" }}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={List}>
                    <Navbar />
        <h2 style={{ display: "block", textAlign: 'center',color:"skyblue" }}><strong><u>List of Professors</u></strong></h2>
                        <div className="box">
                            {
                                data.map((val) => {
                                    return (<>
                                        <Card
                                            id={val.id}
                                            profile_pic={val.profile_pic}
                                            firstname={val.professional.first_name}
                                            lastname={val.professional.last_name}
                                            key={val.id}
                                        />
                                    </>);
                                })
                            }
                        </div>
                    </Route>
                    <Route path='/professor/:slug'>
                        <DetailPage Data={data}
/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    </>);
}
export default List;
