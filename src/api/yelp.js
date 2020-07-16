import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer h-dLIsinxJxKMQaX0KvV9Tco3hpI4qCZw7CpL9t7JVzXat_KWzOfqDqoK0JskpdK7r7ast7MajkgplNuXuMblF2BaZ6ZbQmXsDGrr9FRMoZEzHbBhskVhiUZHc_yXnYx'
	}
});