# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins '*'
#     resource '*', headers: :any, methods: [:get, :post, :patch, :put]
#   end
# end

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000' # your client's domain
    resource '*',
    credentials: true,
    headers: :any,
    methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end