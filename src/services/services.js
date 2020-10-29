import axios from 'axios';

export default{

  async getAllPlanets (){
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async getinfoOnePlanet (id){
    try {
      const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  } 

}