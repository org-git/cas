import axios, { AxiosRequestConfig } from "axios";

const httpServer: any = (opts: any) => {
  /**
   * 请求拦截
   */
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  /**
   * 响应拦截
   */
  axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    error => {
      return Promise.reject(error);
    }
  );
  /**
   * 设置默认请求头
   */
  axios.defaults.headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=UTF-8" // "application/x-www-form-urlencoded",
  };
  /**
   * http 默认配置
   */
  const httpDefaultOpts: AxiosRequestConfig = {
    method: opts.method || "post",
    baseURL: process.env.API_URL || "",
    url: opts.url,
    timeout: 100000,
    params: opts.params,
    data: opts.params,
    headers:
      opts.method === "get"
        ? {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            systoken: ""
          }
        : {
            "Content-Type": "application/json;charset=UTF-8",
            systoken: ""
          }
  };

  /*
    if (getToken()) {
        const token: any = getToken();
        httpDefaultOpts.headers.systoken = token;
    }
    */
  if (opts.method.toLowerCase() === "get") {
    delete httpDefaultOpts.data;
  } else {
    delete httpDefaultOpts.params;
  }
  const promise: Promise<any> = new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then(res => {
        if (res.data.code == -3) {
          resolve(res.data);
        } else {
          resolve(res.data);
        }
      })
      .catch(response => {
        reject(response);
      });
  });
  return promise;
};

export default httpServer;
