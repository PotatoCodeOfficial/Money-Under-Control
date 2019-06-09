module Authenticable
include ActiveSupport::Concern
  def get_user_id
    # Use firebase gem to verify that the token is valid
    token = request.headers["Authorization"].split("Bearer ")[1]
    decoded = JWT.decode(token, nil, false, {algorithm:  'HS256'})[0]
    @user_id = decoded["user_id"]
  end
end