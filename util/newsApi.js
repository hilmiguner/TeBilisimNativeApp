import axios from 'axios';
import apiClient, { Url } from './client';

const getCurrentTime = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    return year+''+month+''+day+''+hours+''+minutes;
}

// const getSettings = async () => {
//     try {
//         const response = await apiClient.get(`/?ayarlar&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Ayarlar alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getSettings = async () => {
    try {
        const response = await axios.get(`${Url}_api?ayarlar`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Ayarlar alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getStories = async () => {
    try {
        const response = await apiClient.get(`/?story&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Ayarlar alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getHeadlineNews = async () => {
//     try {
//         const response = await apiClient.get(`/?mansetler&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getHeadlineNews = async () => {
    try {
        const response = await axios.get(`${Url}_api?mansetler`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getQuintetHeadlineNews = async () => {
//     try {
//         const response = await apiClient.get(`/?beslimanset&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getQuintetHeadlineNews = async () => {
    try {
        const response = await axios.get(`${Url}_api?beslimanset`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getDailyHeadlineNews = async () => {
//     try {
//         const response = await apiClient.get(`/?daily_headline&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getDailyHeadlineNews = async () => {
    try {
        const response = await axios.get(`${Url}_api?daily_headline`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getTrends = async () => {
    try {
        const response = await apiClient.get(`/?trend_posts&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getAuthors = async () => {
//     try {
//         const response = await apiClient.get(`/?yazarlar&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getAuthors = async () => {
    try {
        const response = await apiClient.get(`${Url}_api?yazarlar`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getHomeAuthors = async () => {
    try {
        const response = await apiClient.get(`/?yazarlar&limit=5&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getArticles = async (id) => {
    try {
        const response = await apiClient.get(`/?yazar&yid=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getLatestArticles = async (id) => {
    try {
        const response = await apiClient.get(`/?yazar&yid=${id}&limit=3&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getBreakingNews = async () => {
//     try {
//         const response = await apiClient.get(`/?sondakika&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getBreakingNews = async () => {
    try {
        const response = await axios.get(`${Url}_api?sondakika`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getLocalNews = async () => {
    try {
        const response = await apiClient.get(`/?local_news&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getFeatured = async () => {
//     try {
//         const response = await apiClient.get(`/?featured&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getFeatured = async () => {
    try {
        const response = await axios.get(`${Url}_api?featured`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getHomeFeatured = async () => {
//     try {
//         const response = await apiClient.get(`/?featured&limit=3&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getHomeFeatured = async () => {
    try {
        const response = await axios.get(`${Url}_api?featured`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getTopHeadlineNews = async () => {
//     try {
//         const response = await apiClient.get(`/?ust_mansetler&start=0&limit=10&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getTopHeadlineNews = async () => {
    try {
        const response = await axios.get(`${Url}_api?ust_mansetler&start=0&limit=10`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getPrayerTimes = async (city) => {
//     try {
//         const response = await apiClient.get(`/?namaz&city=${city}&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Veriler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getPrayerTimes = async (city) => {
    try {
        const response = await axios.get(`${Url}_api?namaz&city=${city}`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Veriler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getCurrency = async () => {
//     try {
//         const response = await apiClient.get(`/?piyasalar&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Veriler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getCurrency = async () => {
    try {
        const response = await axios.get(`${Url}_api?piyasalar`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Veriler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getWeather = async (city) => {
//     try {
//         const response = await apiClient.get(`/?hava&city=${city}&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Veriler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getWeather = async (city) => {
    try {
        const response = await axios.get(`${Url}_api?hava&city=${city}`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Veriler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getNewsDetail = async (id) => {
//     try {
//         const response = await apiClient.get(`/?id=${id}&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Detay alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getNewsDetail = async (id) => {
    try {
        const response = await axios.get(`${Url}_api?id=${id}`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getSimiliarNews = async (catid,id) => {
//     try {
//         const response = await apiClient.get(`/?ilgilihaberler&catid=${catid}&haberid=${id}&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Detay alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getSimiliarNews = async (catid,id) => {
    try {
        const response = await axios.get(`${Url}_api?ilgilihaberler&catid=${catid}&haberid=${id}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getFourSimiliarNews = async (catid,id) => {
    try {
        const response = await axios.get(`${Url}_api?ilgilihaberler&catid=${catid}&haberid=${id}&offset=0&limit=4`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getNextNews = async (id) => {
    try {
        const response = await apiClient.get(`/?sonrakihaber=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getPrevNews = async (id) => {
    try {
        const response = await apiClient.get(`/?oncekihaber=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getArticleDetail = async (id) => {
    try {
        const response = await apiClient.get(`/?makale_id=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getGalleryDetail = async (id) => {
    try {
        const response = await apiClient.get(`/?gallery_id=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getVideoDetail = async (id) => {
    try {
        const response = await apiClient.get(`/?video_id=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Detay alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getOtherNews = async () => {
//     try {
//         const response = await apiClient.get(`/?diger_haberler&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getOtherNews = async () => {
    try {
        const response = await axios.get(`${Url}_api?diger_haberler`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getHomeCategoryNews = async (id) => {
    try {
        const response = await apiClient.get(`/?home_category=${id}&offset=0&limit=3&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getCategoryNews = async (id) => {
//     try {
//         const response = await apiClient.get(`/?category=${id}&offset=0&limit=10&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Haberler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getCategoryNews = async (id) => {
    try {
        const response = await axios.get(`${Url}_api?category=${id}&offset=0&limit=10`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getCategoryOtherNews = async (hta,page) => {
    try {
        const response = await apiClient.get(`/?cat_othernews=${hta}&page=${page}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getCategories = async () => {
//     try {
//         const response = await apiClient.get(`/?categories&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Kategoriler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getCategories = async () => {
    try {
        const response = await axios.get(`${Url}_api?categories`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Kategoriler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getGalleries = async () => {
    try {
        const response = await apiClient.get(`/?galleries&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Galeriler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getHomeGalleries = async () => {
//     try {
//         const response = await apiClient.get(`/?galleries&limit=3&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Galeriler alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getHomeGalleries = async () => {
    try {
        const response = await axios.get(`${Url}_api?galleries`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Galeriler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getVideos = async (page) => {
    try {
        const response = await apiClient.get(`/?videos&page=${page}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Videolar alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getHomeVideos = async () => {
//     try {
//         const response = await apiClient.get(`/?videos&limit=3&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Videolar alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getHomeVideos = async () => {
    try {
        const response = await axios.get(`${Url}_api?videos&limit=3`);
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Videolar alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getComments = async (id,tip) => {
//     try {
//         const response = await apiClient.get(`/?comments=${id}&tip=${tip}&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Yorumlar alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getComments = async (id) => {
    try {
        const response = await axios.get(`${Url}_api/?comments=${id}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Yorumlar alınırken bir hata oluştu.', error.message);
        return [];
    }
}

// const getStandings = async (lig) => {
//     try {
//         const response = await apiClient.get(`/?puandurumu&lig=${lig}&v=${getCurrentTime()}`)
//         if (response) {
//             return response.data
//         }
//     } catch (error) {
//         console.log('Yorumlar alınırken bir hata oluştu.', error.message);
//         return [];
//     }
// }
const getStandings = async (lig) => {
    try {
        const response = await apiClient.get(`/?puandurumu=${lig}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Yorumlar alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getAds = async (id) => {
    try {
        const response = await apiClient.get(`/?banner&alan=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}
const addComment = async (id,tip,name,comment) => {
    try {
        const response = await apiClient.get(`/?add_comment&hid=${id}&tip=${tip}&isim=${name}&yorum=${comment}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const search = async (keyword, page) => {
    try {
        const response = await apiClient.get(`/?search&keyword=${keyword}&page=${page}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getTag = async () => {
    try {
        const response = await apiClient.get(`/?kunye&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const sendMessage = async (name,email,content,phone) => {
    try {
        const response = await apiClient.get(`/?contact&name=${name}&email=${email}&phone=${phone}&content=${content}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const trendVideos = async () => {
    try {
        const response = await apiClient.get(`/?trend_videos&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const trendGalleries = async () => {
    try {
        const response = await apiClient.get(`/?trend_galleries&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getBiographies = async () => {
    try {
        const response = await apiClient.get(`/?biographies&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

const getBiography = async (id) => {
    try {
        const response = await apiClient.get(`/?biography=${id}&v=${getCurrentTime()}`)
        if (response) {
            return response.data
        }
    } catch (error) {
        console.log('Haberler alınırken bir hata oluştu.', error.message);
        return [];
    }
}

export default {
    getBiographies,
    trendVideos,
    getBiography,
    trendGalleries,
    getHeadlineNews,
    getQuintetHeadlineNews,
    getDailyHeadlineNews,
    getStories,
    getAuthors,
    getHomeAuthors,
    getArticles,
    getLatestArticles,
    getBreakingNews,
    getTopHeadlineNews,
    getSettings,
    getPrayerTimes,
    getCurrency,
    getFeatured,
    getHomeFeatured,
    getWeather,
    getNewsDetail,
    getSimiliarNews,
    getFourSimiliarNews,
    getNextNews,
    getVideoDetail,
    getArticleDetail,
    getPrevNews,
    getComments,
    sendMessage,
    getOtherNews,
    getCategoryNews,
    getCategoryOtherNews,
    getGalleries,
    getHomeGalleries,
    getVideos,
    getLocalNews,
    getHomeVideos,
    getCategories,
    getHomeCategoryNews,
    getGalleryDetail,
    getStandings,
    getAds,
    addComment,
    getTrends,
    search,
    getTag
}