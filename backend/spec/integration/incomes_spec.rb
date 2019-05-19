require 'swagger_helper'

describe 'Incomes API' do


  path '/incomes' do

    get 'Get all the incomes' do
      tags 'Incomes'
      produces 'application/json', 'application/xml'
      parameter name: :id, :in => :path, :type => :string

      response '200', 'name found' do
        schema type: :object,
          properties: {
            id: { type: :integer, },
            name: { type: :string },
            description: { type: :string },
            amount: { type: :decimal },
            date: { type: :date },
            is_deleted: { type: :boolean }
          },
          required: [ 'id', 'name', 'status' ]

        let(:id) { Pet.create(name: 'foo', status: 'bar', photo_url: 'http://example.com/avatar.jpg').id }
        run_test!
      end

      response '404', 'pet not found' do
        let(:id) { 'invalid' }
        run_test!
      end
    end
  end
end