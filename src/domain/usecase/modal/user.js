
import constraints from '@/constraints'
import services from '@/domain/services'

export default ({ store, api }) => {


  const updateUser = services.middleware.asyncHandler(
    async ({handler}) => {

      const data = await api.get(constraints.environment.servre.url + "1")
      const status = store.dispatch('user/setUser', data["data"])
      handler();
      return status;

    });
  const getDataUser = services.middleware.asyncHandler(
    async () => {

      const data = await api.get(constraints.environment.servre.url + "2") 
      const status = store.dispatch('user/setUser', data["data"])
      return status;

    });

  return { updateUser, getDataUser };

}

