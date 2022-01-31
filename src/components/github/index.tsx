import Repository from "../repository"
import { useState, useEffect } from "react"
import * as S from "./styled";

function Github () {

    /*const axios = require('axios')

    async function getRepos() {
        try{
            const repos = await axios.get("https://api.github.com/users/Victor-B-S/repos");
            console.log(repos);
            return repos;
        } catch (error) {
            console.log(error);
        }
    }*/


    //usando uma versão previa com fetch que funciona mas quero implementar com async/axios se possível

    /*const [followers, setFollowers] = useState('');

    useEffect(() => {
        fetch("https://api.github.com/users/Victor-B-S/repos").then(response => response.json()).then( data => {setData(data)} )
    }, [])
    
    const setData = ({ followers }) => {
        setFollowers(followers);
    }

    return (
        <div className="works">
            <p>{followers}</p>
        </div>
    )
    
    getRepos();*/
    
    return (
        <S.Wrapper>
            Area que os ultimos repositórios atualizados seram listados em cards usando a API do github
            <div className="repository-list">
                <Repository repositoryName= "tempRepo1" link= "#" />
                <Repository repositoryName= "tempRepo2" link= "#" />
                <Repository repositoryName= "tempRepo3" link= "#" />
                <Repository repositoryName= "tempRepo4" link= "#" />
            </div>
        </S.Wrapper>
    )
}

export default Github