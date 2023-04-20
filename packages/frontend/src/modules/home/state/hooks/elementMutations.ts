import { useMutation } from 'react-query';

import { IComponentMutationsService, IMutationKeys } from '../../types';

export const useElementMutations = (
  service: IComponentMutationsService,
  refresh: () => void,
  keys: IMutationKeys
) => {
  const create = useMutation(
    keys.create,
    (data: any) => {
      if (Array.isArray(data)) {
        return service.create(...data);
      }

      if (typeof data === 'object') {
        return service.create(...Object.values(data));
      }

      return service.create(data);
    },
    {
      onSuccess: refresh,
      onError: (err) => alert(err)
    }
  );

  const update = useMutation(
    keys.update,
    (data: any) => {
      if (Array.isArray(data)) {
        return service.update(...data);
      }

      if (typeof data === 'object') {
        return service.update(...Object.values(data));
      }

      return service.update(data);
    },
    {
      onSuccess: refresh,
      onError: (err) => alert(err)
    }
  );

  const remove = useMutation(
    keys.remove,
    (data: any) => {
      if (Array.isArray(data)) {
        return service.remove(...data);
      }

      if (typeof data === 'object') {
        return service.remove(...Object.values(data));
      }

      return service.remove(data);
    },
    {
      onSuccess: refresh,
      onError: (err) => alert(err)
    }
  );

  return {
    create,
    update,
    remove
  };
};
