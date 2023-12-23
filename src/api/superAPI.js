import axiosInstance from "@/utils/axios";

class Api {
  // Center
  async addCenter({ name, phone, address }) {
    const requestData = {
      name,
      phone,
      address,
    };
    const response = await axiosInstance.post(`/admin/centers`, requestData);
    return response;
  }
  async editCenter({ center_id, name, phone, address }) {
    const requestData = {
      center_id,
      name,
      phone,
      address,
    };
    const response = await axiosInstance.put(`/admin/centers`, requestData);
    return response;
  }
  async getCenter() {
    const response = await axiosInstance.get(`/admin/centers`);
    return response;
  }
  async removeCenter(id) {
    const response = await axiosInstance.delete(
      `/admin/centers/center_id/${id}`
    );
    return response;
  }
  // Center

  // Countries
  async addCountries({ name, en_name, code, phone_code }) {
    const requestData = {
      name,
      en_name,
      code,
      phone_code,
    };
    const response = await axiosInstance.post(
      `/admin/countries/suggestion`,
      requestData
    );

    return response;
  }
  async editCountries({ country_id, name, en_name, code, phone_code }) {
    const requestData = {
      country_id,
      name,
      en_name,
      code,
      phone_code,
    };
    const response = await axiosInstance.put(
      `/admin/countries/suggestion`,
      requestData
    );
    return response;
  }
  async getCountries({ page, limit, sortBy, search }) {
    const response = await axiosInstance.get(
      `/admin/countries/suggestion?page=${page}&limit=${limit}&search=${search}&sortBy=${sortBy}`
    );

    return response;
  }
  async removeCountries(id) {
    const response = await axiosInstance.delete(
      `/admin/countries/suggestion/country_id/${id}`
    );

    return response;
  }
  // Center

  // CenterUsers
  async addCenterUsers({
    center_id,
    name,
    email,
    password_show,
    phone,
    address,
  }) {
    const requestData = {
      center_id,
      name,
      email,
      password_show,
      phone,
      address,
    };
    const response = await axiosInstance.post(
      `/admin/centerUsers`,
      requestData
    );
    return response;
  }
  async editCenterUsers({
    account_id,
    name,
    email,
    password_show,
    phone,
    address,
  }) {
    const requestData = {
      account_id,
      name,
      email,
      password_show,
      phone,
      address,
    };
    const response = await axiosInstance.put(`/admin/centerUsers`, requestData);
    return response;
  }
  async getCenterUsers(id) {
    const response = await axiosInstance
      .get(`/admin/centerUsers/center_id/${id}`);
      return response;
    }
  async removeCenterUsers(id) {
    const response = await axiosInstance.delete(
      `/admin/centerUsers/account_id/${id}`
    );

    return response;
  }
  // CenterUsers
}

export default new Api();
