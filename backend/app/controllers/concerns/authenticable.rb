module Authenticable
include ActiveSupport::Concern
  def get_user_id
    # Use firebase gem to verify that the token is valid
    return render_401 unless request.headers["Authorization"]
    token = request.headers["Authorization"].split("Bearer ")[1]
    decoded = JWT.decode(token, nil, false, {algorithm:  'HS256'})[0]
    @user_id = decoded["user_id"]
  end

  def render_401
    render status: 401, json: {}
  end
end