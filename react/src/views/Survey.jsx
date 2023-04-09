import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'
import TButton from '../components/core/TButton';
import PageComponent from '../components/PageComponent'
import SurveyListItem from '../components/SurveyListItem';
import { useStateContext } from '../contexts/ContextProvider'

export default function Survey() {

  const  {surveys}= useStateContext();
  const onDeleteClick = (id) => {
    // if (window.confirm("Are you sure you want to delete this survey?")) {
    //   axiosClient.delete(`/survey/${id}`).then(() => {
    //     getSurveys();
    //     showToast('The survey was deleted');
    //   });
    // }

    console.log('Deleted!');
  };

  return (
    <>
     <PageComponent title='Surveys'
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </TButton>
      }
     >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {surveys.map((survey) => (
              <SurveyListItem
                survey={survey}
                key={survey.id}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>
      </PageComponent>
    </>
  )
}
