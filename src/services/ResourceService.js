import axios from 'axios';

const RESOURCE_API_BASE_URL = "http://localhost:3456/getallresourcesbyid/";
const RESOURCE_API_BASE_URL1 = "http://localhost:3456/addresource";
const RESOURCE_API_BASE_URL2 = "http://localhost:3456/getallresources";

class ResourceService {

    getResources(resourceId){
        return axios.get(RESOURCE_API_BASE_URL,resourceId);
    }

    addResource(resource){
        return axios.post(RESOURCE_API_BASE_URL1, resource);
    }

    getResourcesAll(){
        return axios.get(RESOURCE_API_BASE_URL2);
    }

}

export default new ResourceService()