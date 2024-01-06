import axiosInstance from "@/utils/axios";

class Api {
  async getReports() {
    const response = await axiosInstance.get(`/reports`);

    return response;
  }
  // customers
  async getCustomers({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/customers?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );

    return response;
  }
  async getOTP({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/customers/otp?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );

    return response;
  }
  // customers

  // users
  async getUsers({ page, limit, sortBy, search }) {
    return axiosInstance
      .get(
        `/users?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
      )
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async addUsers({ name, email, password_show, phone, address, action }) {
    const requestData = {
      name,
      email,
      password_show,
      phone,
      address,
      actions: action,
    };
    return axiosInstance
      .post(`/users`, requestData)
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async editUsers({
    user_id,
    name,
    email,
    password_show,
    phone,
    address,
    actions,
  }) {
    const requestData = {
      user_id,
      name,
      email,
      password_show,
      phone,
      address,
      actions,
    };
    const response = await axiosInstance.put(`/users`, requestData);
    return response;
  }
  async removeUsers(id) {
    const response = await axiosInstance.delete(`/users/user_id/${id}`);

    return response;
  }
  // users

  // Norifications
  async getNorifications({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/notifications?page=${page}&limit=${limit}&sortBy=${sortBy}&search=${search}`
    );

    return response;
  }
  async addNorifications({ title, image, body }) {
    const requestData = {
      title,
      body,
      image,
    };
    const response = await axiosInstance.post(`/notifications`, requestData);

    return response;
  }
  async removeNorifications(id) {
    const response = await axiosInstance.delete(
      `/notifications/notification_id/${id}`
    );

    return response;
  }
  // Norifications

  // Countries
  async getCountries({ page, limit, sortBy }) {
    return axiosInstance
      .get(`/countries?page=${page}&limit=${limit}&sortBy=${sortBy}`)
      .then((Response) => Response)
      .catch((error) => {
        console.log("error", error);

        return error.response;
      });
  }
  async getCountriesSuggestions() {
    const response = await axiosInstance.get(`/countries/suggestions`);
    return response;
  }
  async addCountries({ name, en_name, code, phone_code }) {
    const requestData = {
      name,
      en_name,
      code,
      phone_code,
    };
    const response = await axiosInstance.post(`/countries`, requestData);
    return response;
  }
  async editCountries({
    country_id,
    name,
    en_name,
    code,
    phone_code,
    is_active,
  }) {
    const requestData = {
      country_id,
      name,
      en_name,
      code,
      phone_code,
      is_active,
    };
    const response = await axiosInstance.put(`/countries`, requestData);
    return response;
  }
  async removeCountries(id) {
    const response = await axiosInstance.delete(`/countries/country_id/${id}`);

    return response;
  }
  // Countries

  // Cities
  async getCities({ page, limit, sortBy, search, country_id }) {
    const response = await axiosInstance.get(
      `/cities?page=${page}&limit=${limit}&sortBy=${sortBy}&search=${search}&country_id=${country_id}`
    );
    return response;
  }
  async getCountriesAll() {
    const response = await axiosInstance.get(`/countries/all`);
    return response;
  }
  async getCitiesSuggestions() {
    const response = await axiosInstance.get(`/countries/suggestions`);
    return response;
  }
  async addCities({ name, en_name, code, country_id }) {
    const requestData = {
      name,
      en_name,
      code,
      country_id,
    };
    const response = await axiosInstance.post(`/cities`, requestData);
    return response;
  }
  async editCities({ city_id, country_id, name, en_name, code, is_active }) {
    const requestData = {
      city_id,
      country_id,
      name,
      en_name,
      code,
      is_active,
    };
    const response = await axiosInstance.put(`/cities`, requestData);
    return response;
  }
  async removeCities(id) {
    const response = await axiosInstance.delete(`/cities/city_id/${id}`);

    return response;
  }
  // Cities

  // Airports
  async getAirports({ page, limit, sortBy, search, country_id }) {
    const response = await axiosInstance.get(
      `/airports?page=${page}&limit=${limit}&sortBy=${sortBy}&search=${search}&city_id=${country_id}`
    );
    return response;
  }
  async getAirportsSuggestions() {
    const response = await axiosInstance.get(
      `/airports/suggestions`
    );
    return response;
  }
  async getAirportsCountries({
    page,
    limit,
    sortBy,
    search,
    country_id,
    city_id,
  }) {
    const response = await axiosInstance.get(
      `/airports/country_id/${country_id}?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}&city_id=${city_id}`
    );
    return response;
  }
  async getCitiesAll() {
    const response = await axiosInstance.get(`/cities/all`);
    return response;
  }
  async addAirports({ name, en_name, code, city_id }) {
    const requestData = {
      name,
      en_name,
      code,
      city_id,
    };
    const response = await axiosInstance.post(`/airports`, requestData);
    return response;
  }
  async editAirports({ airport_id, city_id, name, en_name, code, is_active }) {
    const requestData = {
      airport_id,
      city_id,
      name,
      en_name,
      code,
      is_active,
    };
    const response = await axiosInstance.put(`/airports`, requestData);
    return response;
  }
  async removeAirports(id) {
    const response = await axiosInstance.delete(`/airports/airport_id/${id}`);

    return response;
  }
  // Airports

  // Airlines
  async getAirlines({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/airlines?page=${page}&limit=${limit}&sortBy=${sortBy}&search=${search}`
    );
    return response;
  }
  async addAirlines({ name, en_name, code, logo }) {
    const requestData = {
      name,
      en_name,
      code,
      logo,
    };
    const response = await axiosInstance.post(`/airlines`, requestData);
    return response;
  }
  async editAirlines({
    airline_id,
    old_logo,
    name,
    en_name,
    code,
    is_active,
    logo,
  }) {
    const requestData = {
      airline_id,
      old_logo,
      name,
      en_name,
      code,
      is_active,
      logo,
    };
    const response = await axiosInstance.put(`/airlines`, requestData);
    return response;
  }
  async removeAirlines(id) {
    const response = await axiosInstance.delete(`/airlines/airline_id/${id}`);

    return response;
  }
  // Airlines

  // Flights
  async getFlights({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/flights?page=${page}&limit=${limit}&sortBy=${sortBy}&search=${search}`
    );
    return response;
  }
  async getAirlinesAll() {
    const response = await axiosInstance.get(`/airlines/all`);
    return response;
  }
  async getAirportsAll() {
    const response = await axiosInstance.get(`/airports/all`);
    return response;
  }
  async addFlights({
    number,
    airline_id,
    departure_airport,
    arrival_airport,
    departure_date,
    arrival_date,
    commercial,
    business,
    first_class,
  }) {
    const requestData = {
      number,
      airline_id,
      departure_airport,
      arrival_airport,
      departure_date,
      arrival_date,
      commercial,
      business,
      first_class,
      };
    const response = await axiosInstance.post(`/flights`, requestData);
    return response;
  }
  async editFlights({
    flight_id,
    number,
    airline_id,
    departure_airport,
    arrival_airport,
    departure_date,
    arrival_date,
    commercial,
    business,
    first_class,
  is_active,
  }) {
    const requestData = {
      flight_id,
      number,
      airline_id,
      departure_airport,
      arrival_airport,
      departure_date,
      arrival_date,
      commercial,
      business,
      first_class,
      is_active,
    };
    const response = await axiosInstance.put(`/flights`, requestData);
    return response;
  }
  async removeFlights(id) {
    const response = await axiosInstance.delete(`/flights/flight_id/${id}`);

    return response;
  }
  // Flights

  // Ads
  async getAds({ page, limit }) {
    const response = await axiosInstance.get(
      `/ads?page=${page}&limit=${limit}`
    );
    return response;
  }
  async addAds({ image }) {
    const requestData = {
      image,
    };
    const response = await axiosInstance.post(`/ads`, requestData);
    return response;
  }
  async editAds({ image, ads_id }) {
    const requestData = {
      image,
      ads_id,
    };
    const response = await axiosInstance.put(`/ads`, requestData);
    return response;
  }
  async removeAds(id) {
    const response = await axiosInstance.delete(`/ads/ads_id/${id}`);
    return response;
  }
  // Ads

  // Services
  async getServices({ page, limit, search }) {
    const response = await axiosInstance.get(
      `/services?page=${page}&limit=1${limit}0&search=${search}`
    );
    return response;
  }
  async addServices({ name, description, image }) {
    const requestData = {
      name,
      description,
      image,
    };
    const response = await axiosInstance.post(`/services`, requestData);
    return response;
  }
  async editServices({ service_id, name, description, old_image, image }) {
    const requestData = {
        service_id, name, description, old_image, image
    };
    const response = await axiosInstance.put(`/services`, requestData);
    return response;
  }
  async removeServices(id) {
    const response = await axiosInstance.delete(`/services/service_id/${id}`);
    return response;
  }
  // Services
}

export default new Api();
