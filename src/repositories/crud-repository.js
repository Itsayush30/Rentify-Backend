class CrudRepository {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
       console.log("CRUD",data,this.model);
        const result = await this.model.create(data);
        console.log(result);
        return result;
      } catch (error) {
        console.log("Something went wrong in crud repoo");
        throw error;
      }
    }
  
    async destroy(id) {
      try {
        const result = await this.model.findByIdAndDelete(id);
        return result;
      } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
      }
    }
  
    async get(id) {
      try {
        const result = await this.model.findById(id);
        return result;
      } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
      }
    }
  
    async getAll() {
      try {
        const result = await this.model.find({});
        return result;
      } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
      }
    }
  
    async update(id, data) {
      try {
        const result = await this.model.findByIdAndUpdate(id, data, {
          new: true,
        });
        return result;
      } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
      }
    }
  }
  
module.exports=CrudRepository;