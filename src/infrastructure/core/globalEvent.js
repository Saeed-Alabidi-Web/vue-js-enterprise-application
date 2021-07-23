  function api_interceptors_request_begin(req) {

    return true;
}


  function api_interceptors_request_end(req) {

    return true;
}

  function api_interceptors_response_begin(response) {

    return true;
}

  function api_interceptors_response_end(response) {

    return true;
}



 function route_before_each(routeTo, routeFrom) {

    return true;
}


 function route_after_each(routeTo, routeFrom) {

}



export default { route_before_each, route_after_each,api_interceptors_request_begin, api_interceptors_request_end, api_interceptors_response_begin, api_interceptors_response_end }