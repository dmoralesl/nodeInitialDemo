class Service {
  constructor (model) {
    this.model = model
    this.getAll = this.getAll.bind(this)
    this.insert = this.insert.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll () {
    try {
      let { count, rows } = await this.model.findAndCountAll()

      return {
        error: false,
        statusCode: 200,
        data: rows,
        total: count
      }
    } catch (errors) {
      return {
        error: true,
        statusCode: 400,
        errors
      }
    }
  }

  async getByAttr (field, value) {
    try {
      const data = await this.model.find({
          [field]: value
      })
      return {
        error: false,
        statusCode: 200,
        data,
        total: data.length
      }
    } catch (errors) {
      return {
        error: true,
        statusCode: 400,
        errors
      }
    }
  }

  async insert (data) {
    try {
      let item = await this.model.create(data)
      if (item)
        return {
          error: false,
          item
        }
    } catch (error) {
      console.log('error', error)
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || 'Not able to create item',
        errors: error.errors
      }
    }
  }

  async update (id, data) {
    try {
      const item = await this.model.findOneAndUpdate({ _id: id }, data, {
        new: true
      })
      return {
        error: false,
        statusCode: 202,
        item
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        error
      }
    }
  }

  async delete (id) {
    try {
      const item = await this.model.findByIdAndDelete(id)
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: 'item not found'
        }

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        item
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        error
      }
    }
  }

  async deleteByAttr (field, value) {
    try {
      const item = await this.model.deleteMany({
        [field]: value
      })
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: 'item not found'
        }

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        item
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        error
      }
    }
  }
}

export default Service
