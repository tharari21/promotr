

# Notes

- drop table:
rails db:rollback
rails destroy model <model_name>

- add column:
rails generate migration add_email_to_users email:string

- deletes tables and reseeds
rake db:reset 


# TODO
remove secret amazon keys from storage.yml