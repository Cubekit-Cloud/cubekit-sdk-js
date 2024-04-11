import e from"axios";var t,a,i,s,o,n,r,p,d,h,c,u;!function(e){e.SYNC="sync",e.ATTACH="attach",e.DETACH="detach"}(t||(t={})),function(e){e.EQUAL="=",e.INEQUAL="!=",e.LIKE="like",e.ILIKE="ilike",e.MORE=">",e.MORE_OR_EQUAL=">=",e.LESS="<",e.LESS_OR_EQUAL="<="}(a||(a={})),function(e){e.POINTER="pointer",e.SCALAR="scalar"}(i||(i={})),function(e){e.AND="and",e.OR="or"}(s||(s={})),function(e){e.GROUP="group",e.SINGLE="single"}(o||(o={})),function(e){e.LEFT="left",e.RIGHT="right",e.FULL="full",e.INNER="inner"}(n||(n={})),function(e){e.ASC="asc",e.DESC="desc"}(r||(r={})),function(e){e.FIRST="first",e.LAST="last"}(p||(p={})),function(e){e.RESOURCE="resource",e.EXPORT="export"}(d||(d={})),function(e){e.XLSX="xlsx",e.CSV="csv"}(h||(h={})),function(e){e.UTF_8="utf-8",e.WINDOWS_1251="windows-1251"}(c||(c={})),function(e){e.SEARCH="search",e.GET_BY_ID="get_by_id",e.CREATE="create",e.UPDATE="update",e.DELETE="delete"}(u||(u={}));const l="{key}";class E{axios;constructor(t){this.axios=e.create({baseURL:t.baseUrl,withCredentials:!0,headers:{"x-api-key":t.serviceKey}})}setConfig(e){this.axios.defaults.baseURL=e.baseUrl,this.axios.defaults.headers["x-api-key"]=e.serviceKey}setAuthorizationHeader(e){this.axios.defaults.headers.Authorization=e}send(e){switch(e.method){case u.GET_BY_ID:return this.getById(e);case u.CREATE:return this.create(e);case u.UPDATE:return this.update(e);case u.DELETE:return this.delete(e);default:return this.search(e)}}preparePathWithId(e,t){return e=e.indexOf(l)>-1?e.replace(l,t):"/"===e.slice(-1)?`${e}${t}`:`${e}/${t}`}search(e){let t=e.path;const a=e.options;return a.pagination&&(t+="?",a.pagination.limit&&(t=`${t}limit=${a.pagination.limit}&`),a.pagination.page&&(t=`${t}page=${a.pagination.page}`)),delete a.pagination,this.axios.post(t,a)}getById(e){const t=e.options;return this.axios.post(this.preparePathWithId(e.path,t.id),t)}create(e){return this.axios.post(e.path,e.options)}update(e){const t=e.options;return this.axios.put(this.preparePathWithId(e.path,t.id),e.options)}delete(e){const t=e.options;return this.axios.delete(this.preparePathWithId(e.path,t.id),{data:e.options})}}class f{axios;constructor(t){this.axios=e.create({baseURL:t.baseUrl,withCredentials:!0,headers:{"x-api-key":t.serviceKey}})}setConfig(e){this.axios.defaults.baseURL=e.baseUrl,this.axios.defaults.headers["x-api-key"]=e.serviceKey}setAuthorizationHeader(e){this.axios.defaults.headers.Authorization=e}getFolderTree(e){return this.axios.get(`/tree?path=${encodeURIComponent(e||"/")}`).then((e=>e.data.data))}view(e){return this.axios.get(`/view?path=${encodeURIComponent(e||"/")}`).then((e=>e.data.data))}createDirectory(e){return this.axios.post(`/createDirectory?path=${encodeURIComponent(e)}`).then((e=>e.data))}delete(e){return this.axios.delete("/delete",{data:e}).then((e=>e.data))}upload(e,t,a,i){const s=new FormData;return s.append("file",t),this.axios.post(`/upload?path=${encodeURIComponent(e)}&file_name=${a}`,s,{onUploadProgress:i,headers:{"Content-Type":"multipart/form-data"}}).then((e=>e.data))}simpleUpload(e,t,a){const i=new FormData;return i.append("file",t),this.axios.post(`/simpleUpload?path=${encodeURIComponent(e)}`,i,{onUploadProgress:a,headers:{"Content-Type":"multipart/form-data"}}).then((e=>e.data))}move(e,t){return this.axios.post(`/move?source=${encodeURIComponent(e)}&target=${encodeURIComponent(t)}`).then((e=>e.data))}}export{E as CubekitOrmClient,f as CubekitStorageClient,c as ExportEncodingTypesEnum,h as FileExportTypesEnum,s as FilterBooleansEnum,o as FilterTypesEnum,i as FilterValueTypesEnum,n as JoinTypesEnum,a as OperatorsEnum,r as OrderDirectionsEnum,p as OrderNullPositionsEnum,t as RelationsModesEnum,u as RequestOrmMethodsEnum,d as ResponseTypeEnum};
//# sourceMappingURL=index.js.map
